import { Head, useForm } from '@inertiajs/react';
import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { LoaderCircle } from 'lucide-react';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    nim: string;
    ktm: File | string;
};

export default function Register() {
    const [preview, setPreview] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        nim: '',
        ktm: '',
    });

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const handleKtmChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setData('ktm', file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout>
            <Head title="Sign up" />
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold text-white">Create your library account</h1>
                <p className="text-light-100">Please complete all fields and upload a valid university ID to gain access to the library</p>
                <form className="flex flex-col gap-6" onSubmit={submit}>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                disabled={processing}
                                placeholder="Full name"
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                tabIndex={2}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                disabled={processing}
                                placeholder="email@example.com"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                tabIndex={3}
                                autoComplete="new-password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                disabled={processing}
                                placeholder="Password"
                            />
                            <InputError message={errors.password} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password_confirmation">Confirm password</Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                required
                                tabIndex={4}
                                autoComplete="new-password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                disabled={processing}
                                placeholder="Confirm password"
                            />
                            <InputError message={errors.password_confirmation} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="nim">Nomor Induk Mahasiswa</Label>
                            <Input
                                id="nim"
                                type="text"
                                required
                                tabIndex={4}
                                autoComplete="new-password"
                                value={data.nim}
                                onChange={(e) => setData('nim', e.target.value)}
                                disabled={processing}
                                placeholder="0110"
                            />
                            <InputError message={errors.nim} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="ktm">Kartu Tanda Mahasiswa</Label>
                            <Input id="ktm" type="file" required disabled={processing} onChange={handleKtmChange} />
                            <InputError message={errors.ktm} />
                        </div>

                        {preview && (
                            <div className="grid-gap-2">
                                <Label>Preview KTM</Label>
                                <div className="mt-2 flex w-full justify-center rounded-md border border-dashed border-gray-500 p-2">
                                    <img src={preview} alt="KTM preview" className="max-h-52 rounded-md object-contain" />
                                </div>
                            </div>
                        )}

                        <Button type="submit" className="mt-2 w-full font-bold text-dark-100" tabIndex={5} disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Create account
                        </Button>
                    </div>

                    <p className="text-center text-base font-medium">
                        Already have an account?{' '}
                        <TextLink href={route('login')} className="font-bold text-primary">
                            Sign in
                        </TextLink>
                    </p>
                </form>
            </div>
        </AuthLayout>
    );
}
