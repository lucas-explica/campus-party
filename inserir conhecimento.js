const text = `
08:00 às 20:00 - Ping 999 - WI-FI GRÁTIS - Local: Ping 999 - Dentro da Arena - Atividades Orgânicas de comunidades
10:00 às 11:30 - CNC na Veia: Montagem de Carrinhos Segue-Linha sem Código - Local: Alquimia - bancada 13 - Dentro da Arena - Atividades Orgânicas de comunidades
10:00 às 11:00 - Baratas Tontas Descomplica: Agilidade na Prática para Resolver os seus Problemas - Local: Uniproejeção - bancada 15 - Dentro da Arena - Atividades Orgânicas de comunidades
10:00 às 11:00 - Doação de Livros - Local: Baratas Tontas - bancada 15 - Dentro da Arena - Atividades Orgânicas de comunidades
10:00 às 11:00 - IA DEGENERATIVA - Local: Laboratório De Competência Em Software Livre - palco de comunidade UP - Dentro da Arena - Atividades Orgânicas de comunidades
10:00 às 13:00 - Foca na pergunta - Local: Cjr
10:00 às 11:00 - Workshop: Prompt é Poder – Criando com IA Generativa - Local: Heetoocamp
11:00 às 13:00 - Nas Entranhas da Ilha do Elefante - Local: Thy Old Blacksmith - Dentro da Arena - Atividades Orgânicas de comunidades
11:00 às 23:55 - Meu primeiro robô - Local: Baratas Tontas - bancada 15 - Dentro da Arena - Atividades Orgânicas de comunidades
11:00 às 14:00 - Res Arcana - Local: Neurodivertidos - Bancada 19 - Dentro da Arena - Atividades Orgânicas de comunidades
11:00 às 14:00 - RPG: Rota de Fuga - Local: Neurodivertidos - Bancada 19 - Dentro da Arena - Atividades Orgânicas de comunidades
14:00 às 16:00 - Convenção dos Goblins! - Local: Thy Old Blacksmith - Dentro da Arena - Atividades Orgânicas de comunidades
14:00 às 16:00 - Missão Impossível - Local: Thy Old Blacksmith - Dentro da Arena - Atividades Orgânicas de comunidades
14:00 às 15:00 - Mentoria em Arduino - Local: Baratas Tontas - bancada 15 - Dentro da Arena - Atividades Orgânicas de comunidades
14:00 às 17:00 - Estação Interativa: Sua Música, Sua História - Local: Heetoocamp - Dentro da Arena - Atividades Orgânicas de comunidades
14:00 às 18:00 - Retrobits - Local: Rivotril E Lolzinho - Dentro da Arena - Atividades Orgânicas de comunidades
14:00 às 17:00 - Stardew Valley: The Boardgame - Local: Neurodivertidos - Bancada 19 - Dentro da Arena - Atividades Orgânicas de comunidades
14:00 às 23:55 - Jogos da madrugada (Aprenda a jogar Colonizadores de Catan) - Local: Baratas Tontas - bancada 15 - Dentro da Arena - Atividades Orgânicas de comunidades
14:30 às 16:00 - CNC na Veia: Montagem de Carrinhos Segue-Linha sem Código 02 - Local: Alquimia - bancada 13 - Dentro da Arena - Atividades Orgânicas de comunidades
15:00 às 16:00 - Debate sobre: As dificuldades do mercado de carbono? - Local: Carbon3labs - Dentro da Arena - Atividades Orgânicas de comunidades
15:00 às 23:59 - Arena Boardgames - Local: C Partiu Meu Coração - Dentro da Arena - Atividades Orgânicas de comunidades
15:00 às 17:00 - Projeto lendo que se aprende - Local: Ping 999 - Dentro da Arena - Atividades Orgânicas de comunidades
15:00 às 16:00 - Introdução à Robótica Educacional - Local: Uniproejeção - bancada 15 - Dentro da Arena - Atividades Orgânicas de comunidades
16:00 às 17:00 - IA Para Todos: O Letramento em Inteligência Artificial e o trabalho do futuro - Local: Uniproejeção - bancada 15 - Dentro da Arena - Atividades Orgânicas de comunidades
17:00 às 23:00 - Classroom Deathmatch 02 - Local: Thy Old Blacksmith - Dentro da Arena - Atividades Orgânicas de comunidades
17:50 às 18:50 - A Tecnologia pode ser feminina e criativa 02 - Local: Meninas.comp - Palco de comunidade SheStack - Dentro da Arena - Atividades Orgânicas de comunidades
18:00 às 18:30 - Demonstração ao vivo: Dashboard de monitoramento com IA e sensores - Local: Carbon3labs - Dentro da Arena - Atividades Orgânicas de comunidades
20:00 às 23:00 - RPG: A Fábrica - Local: Neurodivertidos - Bancada 19 - Dentro da Arena - Atividades Orgânicas de comunidades
22:00 às 23:00 - Agricultura e sustentabilidade: O papel dos pequenos produtores na revolução verde - Local: Carbon3labs - Dentro da Arena - Atividades Orgânicas de comunidades
23:00 às 23:55 - Mysterium - Local: Neurodivertidos - Bancada 19 - Dentro da Arena - Atividades Orgânicas de comunidades
23:00 às 23:55 - The Resistance: Avalon - Local: Neurodivertidos - Bancada 19 - Dentro da Arena - Atividades Orgânicas de comunidades
23:00 às 23:55 - Boardgame: Root - Local: Neurodivertidos - Bancada 19 - Dentro da Arena - Atividades Orgânicas de comunidades
`;

const urlBase = "https://campustest.app.n8n.cloud/webhook-test/conhecimento?text=";

fetch(urlBase + encodeURIComponent(text))
  .then(response => response.text())
  .then(result => console.log("Resposta do servidor:", result))
  .catch(error => console.error("Erro:", error));
