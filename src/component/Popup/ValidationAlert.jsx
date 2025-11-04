import Swal from "sweetalert2";
import './ValidationAlert.css';
import good from "../../assets/alert/goodjob.gif";
import wrong from "../../assets/alert/wrong.gif";
import Notice from "../../assets/alert/Notice.gif";
import { FaArrowRightLong } from "react-icons/fa6";
const ValidationAlert = {
  success: (title = "Good Job!", text = "All answers are correct!") => {
    Swal.fire({
      title: "Great Job!",
      html: "All answers are correct!",
      imageUrl: good,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Question GIF",
      background: "#dfeaf6",
      confirmButtonText: `${< FaArrowRightLong />}`,
      allowOutsideClick: false,
      allowEscapeKey: false,
      buttonsStyling: false,
      customClass: {
        popup: "my-popup",
        image: "my-image",
        title: "my-title",
        content: "my-content",
        confirmButton: "my-button",
      },
    });
  },


  error: (title = "Try Again!", text = "Some answers are incorrect.") => {
    Swal.fire({
      title: "Try Again!",
      html: "Some answers are incorrect.",
      imageUrl: wrong,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Question GIF",
      confirmButtonText: 'Try again',
      allowOutsideClick: false,
      allowEscapeKey: false,
      buttonsStyling: false,
      confirmButtonColor: '#f44336',
      background: "#dfeaf6",
      customClass: {
        popup: "my-popup",
        image: "my-image",
        title: "my-title",
        content: "my-content",
        confirmButton: "my-button1",
      },
    });
  },

  info: (title = "Notice", text = "Please complete all fields.") => {
    Swal.fire({
      title: "Oops!",
      html: "Please complete all fields.",
      imageUrl: Notice,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Question GIF",
      background: "#dfeaf6",
      confirmButtonText: 'Try again',
      allowOutsideClick: false,
      allowEscapeKey: false,
      buttonsStyling: false,
      customClass: {
        popup: "my-popup",
        image: "my-image",
        title: "my-title",
        content: "my-content",
        confirmButton: "my-button",
      },
    });
  },
};

export default ValidationAlert;
