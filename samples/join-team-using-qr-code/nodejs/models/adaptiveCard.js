// Adaptive Card with actions to invoke task module
const getAdaptiveCardUserDetails = () => {
    const adaptiveCard = {
        $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
        body: [
            {
                type: 'TextBlock',
                text: 'Generate QR for team',
                weight: 'bolder',
                size: 3
            }
        ],
        actions: [
            {
                type: "Action.Submit",
                title: "Generate QR code",
                data: {
                    msteams: {
                        type: "task/fetch",
                    },
                    id: "generate"
                }
            }
        ],
        type: 'AdaptiveCard',
        version: '1.4'
    };
    return adaptiveCard;
}

module.exports = {
    getAdaptiveCardUserDetails
};