//https://www.codewars.com/kata/531489f2bb244a5b9f00077e

function undoRedo(object) {
	return {
	  lastAction: [],
	  nextAction: [],
	  set(key, value) {
		 let formerValue;
		 if (!object[key]) {
			formerValue = ['del', key];
		 } else {
			formerValue = ['set', key, object[key]];
		 }
		 this.lastAction.push(formerValue);
		 object[key] = value;
		 this.nextAction = [];
	  },
	  get(key) {
		 return object[key];
	  },
	  del(key) {
		 let formerValue;
		 if (!object[key]) {
			formerValue = ['del', key];
		 } else {
			formerValue = ['set', key, object[key]];
		 }
		 this.lastAction.push(formerValue);
		 delete object[key];
		 this.nextAction = [];
	  },
	  undo() {
		 if (this.lastAction.length === 0) throw new Error('Nothing to undo.');
		 const [a, k, v] = this.lastAction.pop();
		 let formerValue;
		 if (!object[k]) {
			formerValue = ['del', k];
		 } else {
			formerValue = ['set', k, object[k]];
		 }
		 this.nextAction.push(formerValue);
		 if (a === 'set') {
			object[k] = v;
		 } else {
			delete object[k];
		 }
	  },
	  redo() {
		 const [a, k, v] = this.nextAction.pop();
		 let formerValue;
		 if (!object[k]) {
			formerValue = ['del', k];
		 } else {
			formerValue = ['set', k, object[k]];
		 }
		 this.lastAction.push(formerValue);
		 if (a === 'set') {
			object[k] = v;
		 } else {
			delete object[k];
		 }
	  },
	};
 }