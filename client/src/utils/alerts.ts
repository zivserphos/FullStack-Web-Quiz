/* eslint-disable import/prefer-default-export */
import Swal, { SweetAlertIcon } from "sweetalert2";

export const confirmAlert = async () => {
  const x = await Swal.fire({
    title: "if you leave quiz now your data wont be saved.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Leave Quiz",
  }).then((results) => results.isConfirmed);
  return x;
};

export const doneTicketAlert = (titleVal: string, iconVal: SweetAlertIcon) =>
  Swal.fire({
    position: "center",
    icon: iconVal,
    title: titleVal,
    showConfirmButton: false,
    timer: 1500,
  });
