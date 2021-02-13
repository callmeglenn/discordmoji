# What is this?
A function which will return an emoji from a string

# Installation
`npm i discordmoji -- save`
With your client instance
```
const client = new Discord.Client()
...
const discordmoji = require('discordmoji')
client.on('ready', function() {
    const emoji = discordmoji(client, 'string')
})
``` 

## Options
Discordmoji accepts
* *unicode*
* *snowflake* (eg. '1234567890')
* OR *full emoji* (eg. '<:emojiname:1234567890>')
