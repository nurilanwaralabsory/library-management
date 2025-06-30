import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface FlashMessage {
    success?:string;
    error?:string;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
    flash: FlashMessage;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    status?: string;
    role: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: number;
  description: string;
  cover_color: string;
  cover_url: string;
  video_url: string;
  summary: string;
  created_at: Date | null;
}

export interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

export interface BookParams {
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverUrl: string;
  coverColor: string;
  description: string;
  totalCopies: number;
  videoUrl: string;
  summary: string;
}

export interface BorrowBookParams {
  bookId: string;
  userId: string;
}

export interface BorrowRequests {
    id: number;
    borrow_date: string;
    return_date: string;
    due_date: string;
    status: RequestStatus;
    user: {
        name: string;
        email: string;
    };
    book: {
        title: string;
        cover_color: string;
        cover_url: string;
    }
}



