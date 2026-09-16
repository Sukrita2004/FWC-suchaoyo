const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

window.onload = () => {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todo='));
    if (todoCookie) {
        const tasks = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
        tasks.reverse().forEach(task => addTodo(task, false));
    }
};

function saveToCookie() {
    const tasks = Array.from(ftList.children).map(div => div.textContent);
    document.cookie = `todo=${encodeURIComponent(JSON.stringify(tasks))}; path=/; max-age=31536000`;
}

function addTodo(text, save = true) {
    if (!text || text.trim() === '') return;

    const div = document.createElement('div');
    div.textContent = text;

    div.addEventListener('click', () => {
        if (confirm('Do you really want to delete this TO DO?')) {
            div.remove(); 
            saveToCookie();
        }
    });

    ftList.insertBefore(div, ftList.firstChild);

    if (save) saveToCookie();
}

newBtn.addEventListener('click', () => {
    const text = prompt('Enter a new TO DO:');
    if (text) addTodo(text);
});