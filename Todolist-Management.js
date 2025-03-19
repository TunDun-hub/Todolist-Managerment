let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Đã thêm: "${task}"`);
}

function editTask(index, newTask) {
        console.log(`Đã sửa: "${tasks[index]}" thành "${newTask}"`);
        tasks[index] = newTask;
}

function removeTask(index) {
    tasks.splice(index, 1);
}

function displayTasks() {
    console.log("Danh sách công việc:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

addTask("Làm bài tập");
addTask("Đi siêu thị");
displayTasks();
editTask(1, "Mua sắm online");
removeTask(0);
displayTasks();