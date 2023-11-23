const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#Wrapper input");
const taskContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");

let taskCount = 0;
const displayCount = () => {
  countValue.innerHTML = taskCount;
};

const addTask = () => {
  // يقوم بالحصول على قيمة حقل إدخال المهمة ويزيل الفراغات من البداية والنهاية
  const taskName = newTaskInput.value.trim();
  // يقوم بإخفاء أي رسائل الخطأ المعروضة حاليًا
  error.style.display = "none";
  // إذا لم يتم إدخال أي قيمة لاسم المهمة
  if (!taskName) {
    // يقوم بعرض رسالة الخطأ بعد فترة زمنية قصيرة (200 مللي ثانية)
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    // يتم إيقاف تنفيذ الكود هنا حتى لا يتم استمرار التشغيل في حالة عدم إدخال قيمة
    return;
  }

  const task = `<div class="task">
  <input type="checkbox" class="task-check">
  <span class="taskname">${taskName}</span>
  <button class="edit" onclick="editTask(this)">
  <i class="fa-solid fa-pen-to-square"></i>
  </button>
  <button class="delete" onclick="deleteTask(this)">
  <i class="fa-solid fa-trash"></i>
  </button>
  </div>`;

  taskContainer.insertAdjacentHTML("beforeend", task);

  //! deleteButton fun
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });

  //! editButton fun
  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((editBtn) => {
    editBtn.onclick = (e) => {
      // يقوم بتحديد العنصر المستهدف (الزر أو العنصر الفعلي) الذي تم النقر عليه
      let targetElement = e.target;
      if (!(e.target.className == "edit")) {
        targetElement = e.target;
      }
      // يقوم بتحديث قيمة حقل إدخال المهمة بقيمة النص في العنصر السابق للعنصر المستهدف
      newTaskInput.value = targetElement.previousElementSibling?.innerText;
      // يقوم بإزالة العنصر الذي يحتوي على الزرّ المحرر
      targetElement.parentNode.remove();
      // يقوم بتحديث عدد المهام وعرضه
      taskCount -= 1;
      displayCount(taskCount);
    };
  });

  //! tasksCheck fun
  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach((checkBox) => {
    checkBox.onchange = () => {
      checkBox.nextElementSibling.classList.toggle("completed");
      if (checkBox.checked) {
        taskCount -= 1;
      } else {
        taskCount += 1;
      }
      displayCount(taskCount);
    };
  });
  taskCount += 1;
  displayCount(taskCount);
  newTaskInput.value = "";
};

addBtn.addEventListener("click", addTask);

window.onload = () => {
  taskCount = document.querySelectorAll(".task").length;
  displayCount();
  newTaskInput.value = "";
};

// const addBtn = document.querySelector("#add-btn");
// const newTaskInput = document.querySelector("#Wrapper input");
// const taskContainer = document.querySelector("#tasks");
// const error = document.getElementById("error");
// const countValue = document.querySelector(".count-value");

// let taskCount = 0;

// const displayCount = () => {
//   countValue.innerHTML = taskCount;
// };

// const deleteTask = (button) => {
//   button.parentNode.remove();
//   taskCount -= 1;
//   displayCount();
// };

// const editTask = (editBtn) => {
//   let targetElement = editBtn;
//   if (!(editBtn.className == "edit")) {
//     targetElement = editBtn;
//   }
//   newTaskInput.value = targetElement.previousElementSibling?.innerText;
//   targetElement.parentNode.remove();
//   taskCount -= 1;
//   displayCount();
// };

// const toggleTaskCompletion = (checkBox) => {
//   checkBox.nextElementSibling.classList.toggle("completed");
//   if (checkBox.checked) {
//     taskCount -= 1;
//   } else {
//     taskCount += 1;
//   }
//   displayCount();
// };

// const addTask = () => {
//   const taskName = newTaskInput.value.trim();
//   error.style.display = "none";
//   if (!taskName) {
//     setTimeout(() => {
//       error.style.display = "block";
//     }, 200);
//     return;
//   }

//   const task = `<div class="task">
//     <input type="checkbox" class="task-check" onchange="toggleTaskCompletion(this)">
//     <span class="taskname">${taskName}</span>
//     <button class="edit" onclick="editTask(this)">
//       <i class="fa-solid fa-pen-to-square"></i>
//     </button>
//     <button class="delete" onclick="deleteTask(this)">
//       <i class="fa-solid fa-trash"></i>
//     </button>
//   </div>`;

//   taskContainer.insertAdjacentHTML("beforeend", task);

//   taskCount += 1;
//   displayCount();
//   newTaskInput.value = "";
// };

// addBtn.addEventListener("click", addTask);

// window.onload = () => {
//   taskCount = document.querySelectorAll(".task").length;
//   displayCount();
//   newTaskInput.value = "";
// };
