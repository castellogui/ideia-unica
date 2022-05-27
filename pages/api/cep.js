async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;

    const subscribersResponse = await fetch(`https://viacep.com.br/ws/${apiSecret}/json/`);
    const subscribersResponseJson = await subscribersResponse.json();
    const cep = subscribersResponseJson.cep;
    const logradouro = subscribersResponseJson.logradouro;

    response.json({
        cep: cep,
        logradouro: logradouro
    })
}



export default tempo;