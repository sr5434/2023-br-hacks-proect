const openai = require('openai');

openai.apiKey = 'samirs-token';

async function solveProblem(problem) {
    const response = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt: problem,
      temperature: 0.5,
      max_tokens: 100
    });
    return response.choices[0].text.strip();
}

solveProblem('your_problem_here').then(console.log);
