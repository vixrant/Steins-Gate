// * MODULE DEPENDENCIES
const chalk = require('chalk');
// Imports the Google Cloud client library
const language = require('@google-cloud/language');
// Instantiates a client
const client = new language.LanguageServiceClient();

const THRESHOLD = 0.1;

/**
 * @param {*} text Text to analyse.
 */
async function getSentimentScore (text) {
    // Format.
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };
    // Send to GCP.
    try {
        const result = await client.analyzeSentiment({ document: document });
        const sentiment = result[0].documentSentiment;
        return compareScore(sentiment.score);
    } catch (err) {
        console.error(chalk.red('ERROR IN SENTIMENT ANALYSIS:'), err);
        return err;
    }
}

/**
 * @param {*} score Score from GCP.
 */
function compareScore (score) {
    if (score <= -THRESHOLD) {
        return -1;
    } else if (-THRESHOLD < score && score < +THRESHOLD) {
        return 0;
    } else {
        return +1;
    }
}

// * EXPORT
module.exports = getSentimentScore;
