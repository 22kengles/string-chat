input.onButtonPressed(Button.A, function () {
    radio.sendString("hehehehehehehehehehehehehe")
    basic.showString("sent")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
	
})
radio.setGroup(53)
