const loadLessons = async () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => displayLessons(data.data));
  const res = await fetch(url);
  const data = await res.json();
  displayLessons(data.data);
};

const displayLessons = (lessons) => {
  //? ----> Getting the container and empty it
  const levelContainer = document.getElementById("level_container");
  levelContainer.innerHTML = "";

  //? ----> Get  Every lessons Each
  lessons.forEach((lesson) => {
    //?-----> Create Elements
    // console.log(lesson.level_no);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
    </button>
    `;

    // console.log(lesson);
    //?---> Appending into the content
    levelContainer.append(btnDiv);
  });
};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  //// console.log(id);
  //// console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((words) => displayLevelWord(words.data));
};

const displayLevelWord = (words) => {
  //? ---> Getting the container for storing the values and emptying it
  const wordContainer = document.getElementById("word_container");
  wordContainer.innerHTML = "";

  //?--->Looping through the array of object for getting every one of them
  words.forEach((word) => {
    //?Creating an element for storing that value
    const boxDiv = document.createElement("div");
    boxDiv.innerHTML = `
    <p> Cat </p>
    `;

    //?Appending the child to the parent container
    wordContainer.appendChild(boxDiv);
  });
};

loadLessons();
