import {Component, OnInit} from '@angular/core';
import {RegistroUsuario} from 'src/app/models/usuario/registro/registro-usuario';
import {ServiceService} from 'src/app/service/service.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

declare var M: any

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private service: ServiceService, private router: Router) {
    }

    usuarioSeleccionado = new RegistroUsuario();
    menasje: string;

    usuario: any = {};

    ngOnInit(): void {
    }

    autenticarUsuario(form: NgForm) {
        this.service.autenticarUsuario(form.value).subscribe(res => {
            console.log(res);
            alert('Usuario Logueado');

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
