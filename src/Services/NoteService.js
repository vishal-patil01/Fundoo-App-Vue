import httpservice from "./HttpService";

export default {
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
    },
    moveToTrash(note){
        return httpservice.post('notes/trashNotes',note)
    },
    moveToArchive(note){
        return httpservice.post('notes/archiveNotes',note)
    }
}