import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export const SweetAlertError = (message, type)=>{

    switch (type) {
        case 'simple':
            Swal.fire(message);
          break;
       
        default:
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: message,
            });
      }

}


export const SweetAlertConfirmDelete = (callback)=>{

  return Swal.fire({
      title: "Esta Seguro?",
      text: "Se dispone a eliminar un Detalle!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Quiero Eliminarlo!",
      cancelButtonText: "Cancelar!"
    }).then((result) => {
      if (result.isConfirmed ) {
        Swal.fire({
          title: "Eliminado!",
          text: "Su Detalle Fue Eliminado.",
          icon: "success"
        });
        callback(result && result.value == true);
      }
    });
   
}

