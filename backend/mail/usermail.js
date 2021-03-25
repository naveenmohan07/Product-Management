exports.sendmail=(result=>{
	console.log("In mail Component")
	const sgMail = require('@sendgrid/mail')
	sgMail.setApiKey('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');
	const msg = {
	to: result.mailid, // Change to your recipient
	from: 'naveenkumarm.17it@kongu.edu', // Change to your verified sender
	subject: 'Fill the details.',
	text: 'Welcome to NS Traders '+result.username+'...!!!',
	html: '<b>Click below to add your details.....</b><hr><a href="http://localhost:4200/userform">Add_detail</a><br><b>Happy working</b><br><br><br>Thanks,<br>Team NS',
	}
	sgMail
	.send(msg)
	.then(() => {
		console.log('Email sent')
	})
	.catch((error) => {
		console.error(error)
	})
})
