import axios from "axios"
const APIKey = "936103147cc34f4e9a3a465672905a4d"
const refreshInterval = 5000

const assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: APIKey,
    "content-type": "application/json",
  },
})

export const getTranscript = async (audioURL: string, callback: any) => {
  const response = await assembly.post("/transcript", {
    audio_url: audioURL,
    language_code: "pt",
    disfluencies: false,
    punctuate: true,
    format_text: true,
    custom_spelling: [
      {
        "from": ["meios"],
        "to": "e-mails"
      }, {
        "from": ["meio"],
        "to": "e-mail"
      }, {
        "from": ["1"],
        "to": "um"
      }, {
        "from": ["2"],
        "to": "dois"
      },
      {
        "from": ["3"],
        "to": "três"
      },
      {
        "from": ["4"],
        "to": "quatro"
      },
      {
        "from": ["5"],
        "to": "cinco"
      },
      {
        "from": ["6"],
        "to": "seis"
      },
      {
        "from": ["7"],
        "to": "sete"
      },
      {
        "from": ["8"],
        "to": "oito"
      },
      {
        "from": ["9"],
        "to": "nove"
      },
      {
        "from": ["10"],
        "to": "dez"
      },
      {
        "from": ["norte"],
        "to": "Norte"
      },
      {
        "from": ["nordeste"],
        "to": "Nordeste"
      },
      {
        "from": ["centro, oeste"],
        "to": "Centro-Oeste"
      },
      {
        "from": ["sudeste"],
        "to": "Sudeste"
      },
      {
        "from": ["sul"],
        "to": "Sul"
      },
      {
        "from": ["quilovate"],
        "to": "kW"
      },
      {
        "from": ["mega. Vat"],
        "to": "MW"
      },
      {
        "from": ["vat"],
        "to": "W"
      },
      {
        "from": ["Giga"],
        "to": "G"
      },
      {
        "from": ["Gigabit"],
        "to": "GB"
      },
      {
        "from": ["Toneladas"],
        "to": "t"
      },
      {
        "from": ["Litros"],
        "to": "l"
      },
      {
        "from": ["reais"],
        "to": "R$"
      },
      {
        "from": ["Dólares"],
        "to": "U$"
      },
      {
        "from": ["Euros"],
        "to": "€"
      },
      {
        "from": ["Metros"],
        "to": "m"
      },
      {
        "from": ["Metros. Quadrados"],
        "to": "m²"
      },
      {
        "from": ["Metros. Cúbicos"],
        "to": "m³"
      },
    ]
  })

  const checkCompletionInterval = setInterval(async () => {

    const transcript = await assembly.get(`/transcript/${response.data.id}`)
    const transcriptStatus = transcript.data.status

    if (transcriptStatus === "completed") {
      let transcriptText = transcript.data.text
      clearInterval(checkCompletionInterval)
      console.log('deu bom')
      console.log(transcriptText)
      callback(transcriptText)

    } else {
      console.log('ainda nao')
    }
  }, refreshInterval)
}