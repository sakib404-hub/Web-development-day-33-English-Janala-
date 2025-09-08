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
    <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary btn-lesson">
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
    .then((words) => {
      removeActivation();
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      clickBtn.classList.add("active");
      displayLevelWord(words.data);
    });
};

const removeActivation = () => {
  const lessonBtns = document.querySelectorAll(".btn-lesson");
  lessonBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const displayLevelWord = (words) => {
  //? ---> Getting the container for storing the values and emptying it
  const wordContainer = document.getElementById("word_container");
  wordContainer.innerHTML = "";

  if (words.length == 0) {
    wordContainer.innerHTML = `
    <div
          class="flex flex-col items-center font-bangla  text-center p-4 col-span-full space-y-4 font-bangla"
        >
        <img src="photos/alert-error.png" alt="">
          <p class="text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
          <h2 class="text-4xl text-gray-700">নেক্সট Lesson এ যান</h2>
        </div>
    `;
  }
  //?--->Looping through the array of object for getting every one of them
  words.forEach((word) => {
    console.log(word);
    //?Creating an element for storing that value
    const boxDiv = document.createElement("div");
    boxDiv.innerHTML = `
         <div
          class="bg-white py-10 px-5 text-center rounded-lg shadow-sm space-y-4"
        >
          <h2 class="text-xl font-bold">${
            word.word ? word.word : "Words Unavailable"
          }</h2>
          <div class="font-bangla font-medium mb-6">${
            word.meaning ? word.meaning : "No description"
          }</div>
            <p class="font-semibold">${
              word.pronunciation ? word.pronunciation : "Found No Pronunciation"
            }</p>
          <div class="flex justify-between items-center">
            <button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF10] focus:bg-[#1A91FF80]">
              <i class="fa-solid fa-circle-info text-lg"></i>
            </button>
            <button class="btn bg-[#1A91FF10] focus:bg-[#1A91FF80]">
              <i class="fa-solid fa-volume-high text-lg"></i>
            </button>
          </div>
        </div>
    `;
    //?Appending the child to the parent container
    wordContainer.appendChild(boxDiv);
  });
};

loadLessons();
