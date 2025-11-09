import Swal from "sweetalert2";
import './ValidationAlert.css';
import good from "../../assets/alert/goodjob.gif";
import wrong from "../../assets/alert/wrong.gif";
import Notice from "../../assets/alert/Notice.gif";

const ValidationAlert = {

  // ✅ لكل الإجابات الصحيحة
  success: (scoreMessage) => {
    Swal.fire({
      title: "Great Job!",
      html: `
      <div style="font-size: 20px; text-align: center;">
        <p style="font-weight: bold; margin-bottom: 8px;">
          All answers are correct! ✅
        </p>
        <p style="color: green; font-weight: bold;">
          ${scoreMessage}
        </p>
      </div>`,
      imageUrl: good,
      imageWidth: 200,
      imageHeight: 200,
      background: "#dfeaf6",
      confirmButtonText: "Good Job",
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

  // 🟠 إذا في إجابات صحيحة وإجابات خاطئة
  warning: (scoreMessage) => {
    Swal.fire({
      title: "Keep Going!",
      html: `
      <div style="font-size: 20px; text-align: center;">
        <p style="font-weight: bold; margin-bottom: 8px;">
          You got some correct answers 🌟 But keep trying!
        </p>
        <p style="color: orange; font-weight: bold;">
          ${scoreMessage}
        </p>
      </div>`,
      imageUrl: Notice,
      imageWidth: 200,
      imageHeight: 200,
      background: "#fff4d9",
      confirmButtonText: "Continue",
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

  // ❌ إذا ولا إجابة صحيحة
  error: (scoreMessage) => {
    Swal.fire({
      title: "Try Again!",
      html: `
      <div style="font-size: 20px; text-align: center;">
        <p style="font-weight: bold; margin-bottom: 8px;">
          None of the answers are correct. ❌
        </p>
        <p style="color: red; font-weight: bold;">
          ${scoreMessage}
        </p>
        <p style="margin-top: 6px;">Try again, you can do it! 🌟</p>
      </div>`,
      imageUrl: wrong,
      imageWidth: 200,
      imageHeight: 200,
      background: "#fde4e4",
      confirmButtonText: "Try Again",
      allowOutsideClick: false,
      allowEscapeKey: false,
      buttonsStyling: false,
      customClass: {
        popup: "my-popup",
        image: "my-image",
        title: "my-title",
        content: "my-content",
        confirmButton: "my-button1",
      },
    });
  },

  // 🟡 إذا ما كمل الطالب الحل
  info: () => {
    Swal.fire({
      title: "Oops!",
      html: "Please complete all fields.",
      imageUrl: Notice,
      imageWidth: 200,
      imageHeight: 200,
      background: "#dfeaf6",
      confirmButtonText: "OK",
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
