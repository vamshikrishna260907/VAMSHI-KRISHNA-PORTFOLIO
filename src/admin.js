const editor = document.getElementById('editor');
const status = document.getElementById('status');
const loadButton = document.getElementById('load');
const saveButton = document.getElementById('save');

function setStatus(message, isError = false) {
  status.textContent = message;
  status.className = isError ? 'warning' : '';
}

async function loadContent() {
  setStatus('Loading content…');
  try {
    const response = await fetch('/api/content');
    if (!response.ok) throw new Error('Unable to fetch content.');
    const content = await response.json();
    editor.value = JSON.stringify(content, null, 2);
    setStatus('Content loaded. Edit and click Save.');
  } catch (error) {
    setStatus(`Load failed: ${error.message}`, true);
  }
}

async function saveContent() {
  setStatus('Saving content…');
  try {
    const payload = JSON.parse(editor.value);
    const response = await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload.error || 'Save failed.');
    }
    setStatus('Content saved successfully. Refresh the portfolio to preview.');
  } catch (error) {
    setStatus(`Save failed: ${error.message}`, true);
  }
}

loadButton.addEventListener('click', loadContent);
saveButton.addEventListener('click', saveContent);
loadContent();
