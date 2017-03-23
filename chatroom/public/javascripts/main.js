angular.module('chatRoom', [])
	.controller('chatController', chatCtrl);

// chatCtrl.$inject = [$event]
	var socket = io()

	function chatCtrl($scope){
		var chat = this;
		chat.messageHistory = [];

		chat.keyup = function(event){
			// console.log('something worked', event.keyCode)
			if(event.keyCode===13){
				// console.log('great')
				socket.emit('message',chat.message)
				// chat.key = event.keyCode
				// console.log(chat.message)
				// chat.messageHistory.push(chat.message)
				chat.message=('')
				// chat.keyMessage = chat.message
			}


			// chat.key = event.keyCode
		}
		socket.on('message', function(message){
			console.log(message)
			$scope.$apply(function(){
				chat.messageHistory.push(message)
				
			})
		});

	// connect the socket.io server


	socket.on('connect', function(){})

	//define socket events

	// attach events
}
