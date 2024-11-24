class ChatUI {
    constructor(list) {
        this.list = list;
    }

    clear(){
        this.list.innerHTML = '';
    }

    render(data) {
        const date =  dateFns.formatDistanceToNow(data.created_at.toDate(), { addSuffix: true });
        let html = ` <li class="list-group-item">
                    <h6 class="fw-bold">${data.username}</h6>
                    <span class="text-muted">${data.message}</span>
                    <p class="text-end text-muted">${date}</p>
                </li>`;

        this.list.innerHTML += html;
    }
}