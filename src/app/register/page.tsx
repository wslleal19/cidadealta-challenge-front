import Image from "next/image";
import Link from 'next/link'

export default function Register() {
    return (
        <main className="flex items-center justify-center h-screen w-full bg-base-900">
            <div className="bg-white rounded-sm p-10 sm:w-[456px] w-[90%] shadow-md">
                <h5 className="font-bold text-2xl text-gray-600">Faça seu cadastro</h5>
                <span className="text-gray-500">Informe os dados abaixo</span>

                <div className="mt-10 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-600" htmlFor="name">Nome *</label>
                        <input id="name" className="input-field" type="text" placeholder="Seu Nome"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-600" htmlFor="email">E-mail *</label>
                        <input id="email" className="input-field" type="text" placeholder="Seu E-mail"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-600" htmlFor="password">Senha *</label>
                        <input id="password" className="input-field" type="password" placeholder="Sua Senha"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-600" htmlFor="confirm_password">Confirmar Senha *</label>
                        <input id="confirm_password" className="input-field" type="password" placeholder="Repita a Senha"/>
                    </div>

                    <button className="btn bg-primary-400">Criar conta</button>

                    <div className="mt-10 text-center text-sm text-gray-500">
                        Já tem uma conta? <Link className="text-primary-500" href="/login">Login</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
