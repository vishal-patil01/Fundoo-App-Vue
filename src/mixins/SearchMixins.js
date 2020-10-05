export default {
    computed: {
        filteredNotes: function () {
            return this.noteList.filter((note) => {
                return note.title.toLowerCase().trim().match(this.searchedNotes);
            });
        },
    },
}