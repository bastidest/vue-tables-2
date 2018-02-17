module.exports = function(rowId, e) {

  if (e) e.stopPropagation();

  if (this.openChildRows.includes(rowId)) {
    var index = this.openChildRows.indexOf(rowId);
    let removed = this.openChildRows.splice(index,1)[0];
    setTimeout(function(){
      this.dispatch('closedChild', removed);
    }.bind(this),0);
  } else {
  	this.openChildRows.push(rowId);
  }
}
