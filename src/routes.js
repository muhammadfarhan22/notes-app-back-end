const { addNotehandler, getAllNoteshandler, getNoteByIdhandler, editnoteByIdHandler, deleteNoteByIdhandler } = require('./handler');

const routes = [
	{
		method: 'POST',
		path: '/notes',
		handler: addNotehandler,
	},

	{
		method: 'GET',
		path: '/notes',
		handler: getAllNoteshandler,
	},

	{
		method: 'GET',
		path: '/notes/{id}',
		handler: getNoteByIdhandler,
	},

	{
		method: 'PUT',
		path: '/notes/{id}',
		handler: editnoteByIdHandler,
	},

	{
		method: 'DELETE',
		path: '/notes/{id}',
		handler: deleteNoteByIdhandler,
	},
];

module.exports = routes;
