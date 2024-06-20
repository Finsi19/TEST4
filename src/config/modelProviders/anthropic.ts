import { ModelProviderCard } from '@/types/llm';

// ref https://docs.anthropic.com/claude/docs/models-overview#model-comparison
const Anthropic: ModelProviderCard = {
  chatModels: [],
  checkModel: 'claude-3-haiku-20240307',
  id: 'anthropic',
  name: 'Anthropic',
  proxyUrl: {
    placeholder: 'https://api.anthropic.com',
  },
};

export default Anthropic;
