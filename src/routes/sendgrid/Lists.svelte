<script>
  
  import sgMail from '@sendgrid/mail';
  sgMail.setApiKey('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')

  const msg = {
    to: 'pablotercerospersonal@gmail.com',
    from: 'pablotercerospersonal@gmail.com',
    subject: 'Task Modification',
    text: 'A member of the group modified the list Test-Task. Some tasks may have marked as finished.',
    html: '<strong>A member of the group modified the list Test-Task. Some tasks may have marked as finished.</strong>',
  }

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })
    .catch((error) => {
      console.error(error)
    })

</script>

<h1>Sending email with SendGrid...</h1>