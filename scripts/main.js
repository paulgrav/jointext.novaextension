// Wraps the current editor selection in a new tag, with placeholders
nova.commands.register('joinText', editor => {
	var selectedRanges = editor.selectedRanges.reverse();
	editor.edit(function(e) {
		for (var range of selectedRanges) {
			var text = editor.getLineRangeForRange(range);
			var lineEnd = new Range(text.end - 1, text.end);
			e.delete(lineEnd);
		}
	});
});
