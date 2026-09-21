$(document).ready(function () {

    $('#form-tarefa').on('submit', function (event) {
        event.preventDefault();

        const tarefa = $('#tarefa').val();

        if (tarefa.trim() !== '') {
            const novaTarefa = `
                <li>
                    <input type="checkbox" class="check-tarefa">
                    <span>${tarefa}</span>
                </li>
            `;

            $('#lista-tarefas').append(novaTarefa);

            $('#tarefa').val('');
            $('#tarefa').focus();
        }
    });

    // Clicar no checkbox
    $('#lista-tarefas').on('change', '.check-tarefa', function () {
        $(this).siblings('span').css(
            'text-decoration',
            this.checked ? 'line-through' : 'none'
        );
    });

    // Clicar no texto da tarefa
    $('#lista-tarefas').on('click', 'span', function () {
        const checkbox = $(this).siblings('.check-tarefa');

        checkbox.prop('checked', !checkbox.prop('checked'));

        $(this).css(
            'text-decoration',
            checkbox.prop('checked') ? 'line-through' : 'none'
        );
    });

});