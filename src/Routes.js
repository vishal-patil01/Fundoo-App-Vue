import Login from './components/Login.vue'
import DashBoard from './components/DashBoard.vue'
import Note from './components/Note.vue'
import Trash from './components/TrashNotes.vue'
import Archive from './components/ArchivedNotes.vue'

export default [
    { path: '/', component: Login },
    {
        path: '/dashboard',
        redirect: {
            name: "note"
        },
    },
    {
        path: '/dashboard',
        component: DashBoard,
        name: "note",
        children: [
            {
                path: 'note',
                name: 'note',
                component: Note
            },
            {
                path: 'trash',
                component: Trash
            },
            {
                path: 'archive',
                component: Archive
            },

        ]
    }
]