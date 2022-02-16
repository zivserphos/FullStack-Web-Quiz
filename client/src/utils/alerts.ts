/* eslint-disable import/prefer-default-export */
import Swal, { SweetAlertIcon } from "sweetalert2";

export const confirmAlert = async () => {
  const leaveQuiz = await Swal.fire({
    title: "if you leave quiz now your data wont be saved.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Leave Quiz",
  }).then((results) => results.isConfirmed);
  return leaveQuiz;
};

export const customAlert = (titleVal: string, iconVal: SweetAlertIcon) =>
  Swal.fire({
    position: "center",
    icon: iconVal,
    title: titleVal,
    showConfirmButton: false,
    timer: 1500,
  });

export const successfullSignUp = () =>
  Swal.fire({
    position: "center",
    title: "successfull sign up, please log in and enjoy your free quizzes",
    icon: "success",
    showConfirmButton: false,
    timer: 1700,
  });

export const failureSignUp = () =>
  Swal.fire({
    position: "center",
    title: "could not sign up please try again in a few moments",
    icon: "error",
    showConfirmButton: false,
    timer: 5000,
  });
