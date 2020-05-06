import {Component, OnInit} from '@angular/core';
import {RegistroUsuario} from 'src/app/models/usuario/registro/registro-usuario';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UsuarioService} from '../../service/usuario/usuario.service';

declare var M: any

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private service: UsuarioService, private router: Router) {
    }

    usuarioSeleccionado = new RegistroUsuario();
    menasje: string;

    usuario: any = {};

    ngOnInit(): void {
    }

    autenticarUsuario(form: NgForm) {
        this.service.autenticarUsuario(form.value).subscribe(res => {
            this.usuario = res;
            localStorage.setItem('usuario', JSON.stringify(this.usuario.usuario[0]));
            this.router.navigate(['/perfil']);

        }, (err: any) => {
            if (err.status == 400) {
                M.toast({html: 'Credenciales Incorrectas'});
                this.resetForm(form);
            }
        });
    }

    resetForm(form?: NgForm) {
        if (form) {
            form.reset();
        }
    }
}
