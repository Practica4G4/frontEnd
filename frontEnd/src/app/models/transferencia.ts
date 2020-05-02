export class Transferencia {
    monto: string;
    cuentaOrigen: string;
    cuentaDestino: string;
}

export class DetalleTransferencia{
  id_transferencia: number;
  monto: number;
  fecha: string;
  cuenta_origen: number;
  cuenta_destino: number;
}

export class Transferencias {
  transferencias: Array<DetalleTransferencia>;
}
