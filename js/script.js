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
    console.log(lesson.level_no);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
    </button>
    `;

    // console.log(lesson);
    //?---> Appending into the content
    levelContainer.append(btnDiv);
  });
};

loadLessons();
