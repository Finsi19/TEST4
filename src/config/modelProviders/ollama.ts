import { ModelProviderCard } from '@/types/llm';

const Ollama: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Tidak Ada Model Yang Tersedia',
      id: '',
      tokens: 4096,
      vision: false,
    },
  ],
  defaultShowBrowserRequest: true,
  id: 'ollama',
  modelList: { showModelFetcher: true },
  name: 'Ollama',
  showApiKey: false,
};

export default Ollama;
