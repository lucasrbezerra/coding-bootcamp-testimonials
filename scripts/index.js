const peoples = [
  {
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now.
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so
        excited about the future. ”`,
    name: "Tanya Sinclair",
    role: "UX Engineer",
    image: "../img/image-tanya.jpg",
  },
  {
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course.
        The depth the instructors go into is incredible. I now feel so confident about
        starting up as a professional developer. ”`,
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    image: "../img/image-john.jpg",
  },
];

const text = document.getElementsByClassName("text");
const namePeople = document.getElementsByClassName("name");
const role = document.getElementsByClassName("role");
const image = document.getElementsByClassName("image");

let index = 0;

function prevClick(e) {
  if (index !== 0) {
    index--;
  } else {
    index = peoples.length - 1;
  }
  updateSlide(index);
}

function nextClick(e) {
  if (index === peoples.length - 1) {
    index = 0;
  } else {
    index++;
  }
  updateSlide(index);
}

function updateSlide(index) {
  text[0].textContent = peoples[index].text;
  namePeople[0].textContent = peoples[index].name;
  role[0].textContent = peoples[index].role;
  image[0].setAttribute("src", peoples[index].image);
}
