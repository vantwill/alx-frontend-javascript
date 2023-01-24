export default function guardrail(mathFunction) {
  try {
    return [mathFunction(), 'Guardrail was processed'];
  } catch (throwedError) {
    return [`${throwedError.name}: ${throwedError.message}`, 'Guardrail was processed'];
  }
}
