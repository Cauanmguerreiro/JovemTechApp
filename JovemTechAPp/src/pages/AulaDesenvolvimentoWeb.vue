<template>
  <div class="q-pa-lg">
    <h1 class="text-h4 q-mb-md">Aula: Desenvolvimento Web</h1>
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Introdução ao Desenvolvimento Web</div>
        <div class="text-body2 q-mt-sm">
          Aprenda os fundamentos de HTML, CSS e JavaScript, criando páginas web modernas e responsivas.
        </div>
      </q-card-section>
      <q-card-section>
        <ul>
          <li>O que é desenvolvimento web?</li>
          <li>Estrutura básica de um site (HTML)</li>
          <li>Estilização com CSS</li>
          <li>Interatividade com JavaScript</li>
          <li>Ferramentas e boas práticas</li>
        </ul>
      </q-card-section>
    </q-card>
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Estrutura Básica de um Site</div>
        <div class="text-body2 q-mt-sm">
          Todo site moderno começa com uma estrutura HTML, pode ser estilizado com CSS e ter interatividade com JavaScript. Veja um exemplo básico:
        </div>
        <q-markup-table class="q-mt-md">
          <tbody>
            <tr>
              <td>
                <pre style="font-size: 0.95em;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Meu Site JovemTech&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bem-vindo ao JovemTech!&lt;/h1&gt;
    &lt;p&gt;Esta é a estrutura básica de um site.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
                </pre>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="text-h6 q-mb-sm">Conteúdo Básico sobre JavaScript</div>
        <div class="text-body2 q-mb-md">
          JavaScript é a linguagem de programação da web, usada para criar interatividade e lógica em páginas. Veja um exemplo de sintaxe básica:
        </div>
        <q-markup-table>
          <tbody>
            <tr>
              <td>
                <pre style="font-size: 0.95em;">
// Exemplo de código JavaScript
console.log("Olá, JovemTech!");

// Variáveis
let nome = "Maria";
let idade = 18;
console.log(`Nome: ${nome}, Idade: ${idade}`);

// Estrutura condicional
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
                </pre>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="text-h6 q-mb-sm">Teste seu código JavaScript!</div>
        <div class="terminal-editor-wrapper">
          <div class="terminal-lines">
            <div v-for="n in codigoJS.split('\n').length" :key="n" class="terminal-line-number">{{ n }}</div>
          </div>
          <textarea
            v-model="codigoJS"
            class="terminal-textarea"
            spellcheck="false"
            rows="8"
            :style="{height: (codigoJS.split('\n').length * 1.5) + 'em'}"
          ></textarea>
        </div>
        <q-btn color="primary" label="Executar" :loading="executando" @click="executarJS" class="q-mt-md" />
        <div v-if="saidaJS !== ''" class="q-mt-md">
          <div class="text-subtitle2">Saída:</div>
          <pre class="q-mt-xs terminal-output">{{ saidaJS }}</pre>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const codigoJS = ref('console.log("Olá, JovemTech!")')
const saidaJS = ref('')
const executando = ref(false)

function executarJS() {
  executando.value = true
  saidaJS.value = ''
  let output = ''
  const originalLog = console.log
  try {
    console.log = (...args) => {
      output += args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') + '\n'
    }

    new Function(codigoJS.value)()
    saidaJS.value = output.trim() || 'Sem saída.'
  } catch (e) {
    saidaJS.value = 'Erro ao executar código: ' + (e.message || e)
  } finally {
    console.log = originalLog
    executando.value = false
  }
}
</script>

<style scoped>
.q-card {
  max-width: 700px;
  margin: 0 auto;
}
.terminal-editor-wrapper {
  display: flex;
  background: #181818;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0002;
  margin-bottom: 12px;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
}
.terminal-lines {
  background: #222;
  color: #888;
  padding: 12px 8px 12px 12px;
  border-radius: 8px 0 0 8px;
  user-select: none;
  text-align: right;
  min-width: 32px;
}
.terminal-line-number {
  height: 1.5em;
  line-height: 1.5em;
  font-size: 1em;
}
.terminal-textarea {
  background: #181818;
  color: #e6e6e6;
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  font-size: 1em;
  font-family: inherit;
  padding: 12px;
  border-radius: 0 8px 8px 0;
  min-height: 12em;
  box-sizing: border-box;
  caret-color: #00ff90;
}
.terminal-textarea::selection {
  background: #333;
}
.terminal-output {
  background: #111;
  color: #00ff90;
  border-radius: 6px;
  padding: 12px;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 1em;
}
</style>
