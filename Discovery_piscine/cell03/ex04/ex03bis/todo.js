$(document).ready(function () {
    const $ftList = $('#ft_list');

    // โหลดข้อมูลจาก Cookie เมื่อเปิดหน้าเว็บ
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todo='));
    if (todoCookie) {
        try {
            const tasks = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
            tasks.reverse().forEach(task => addTodo(task, false));
        } catch (e) {
            console.error(e);
        }
    }

    function saveToCookie() {
        const tasks = $ftList.children('div').map(function () {
            return $(this).text();
        }).get();
        document.cookie = `todo=${encodeURIComponent(JSON.stringify(tasks))}; path=/; max-age=31536000`;
    }

    function addTodo(text, save = true) {
        if (!text || text.trim() === '') return;

        // สร้าง <div> ด้วย jQuery และดักจับ click event
        const $div = $('<div></div>').text(text);

        $div.on('click', function () {
            if (confirm('Do you really want to delete this TO DO?')) {
                $(this).remove();
                saveToCookie();
            }
        });

        // แทรกไว้ที่ด้านบนสุดของรายการ
        $ftList.prepend($div);

        if (save) saveToCookie();
    }

    // กดปุ่ม New เพื่อเพิ่มรายการ
    $('#new_btn').on('click', function () {
        const text = prompt('Enter a new TO DO:');
        if (text) addTodo(text);
    });
});