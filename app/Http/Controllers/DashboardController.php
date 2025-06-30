<?php

namespace App\Http\Controllers;

use App\Models\BorrowRecord;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function borrowRequests()
    {
        $borrowRecord = BorrowRecord::with(['user', 'book'])
            ->orderBy('borrow_date', 'desc')
            ->get();
        return Inertia::render('borrow-request', [
            'borrowRequests' => $borrowRecord
        ]);
    }

    public function updateStatus(BorrowRecord $borrowRecord, Request $request)
    {
        $validated = $request->validate([
            'status' => 'required',
            Rule::in(['BORROWED', 'RETURNED', 'LATE_RETURNED']),
        ]);

        $borrowRecord->status = $validated['status'];

        if ($borrowRecord->status === 'BORROWED') {
            $borrowRecord->return_date = null;
        } elseif ($borrowRecord->status === 'RETURNED' || $borrowRecord->status === 'LATE_RETURNED') {
            if (!$borrowRecord->return_date) {
                $borrowRecord->return_date = now();
            }
        }
        $borrowRecord->save();

        return redirect()->route('borrow-requests')->with('success', 'Borrow request status updated successfully.');
    }
}
