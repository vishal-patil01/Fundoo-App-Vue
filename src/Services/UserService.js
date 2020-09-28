import httpservice from "./HttpService";

export default {
    userLoginService(loginData) {
        return httpservice.post(`user/login`, loginData)
    },
    addNote(data) {
        return httpservice.post('notes/addNotes', data)
    },
    fetchNotesList() {
        return httpservice.get('notes/getNotesList')
    },
    fetchArchivedNotesList() {
        return httpservice.get('/notes/getArchiveNotesList')
    },
    fetchTrashedNotesList() {
        return httpservice.get('/notes/getTrashNotesList')
    }
}