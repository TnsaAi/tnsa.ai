import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"

const models = {
  'NGen2-advancifa-43.4-engine-tf': {
    name: 'NGen-2',
    description: 'Our most advanced language model, capable of understanding and generating human-like text with unprecedented accuracy and coherence.',
    capabilities: [
      'Natural language understanding and generation',
      'Code generation and analysis',
      'Creative writing and storytelling',
      'Question answering and information retrieval',
      'Language translation',
    ],
    technicalSpecs: {
      parameters: '175 billion',
      trainingData: 'Diverse internet text, books, and articles',
      contextWindow: '8,192 tokens',
    },
  },
  'image-gen-1': {
    name: 'IGen-1',
    description: 'A state-of-the-art image generation model that can create, edit, and manipulate images based on textual descriptions.',
    capabilities: [
      'Photo-realistic image generation',
      'Artistic style transfer',
      'Image editing and manipulation',
      'Object addition and removal',
      'Background generation and replacement',
    ],
    technicalSpecs: {
      architecture: 'Diffusion-based model',
      resolution: 'Up to 1024x1024 pixels',
      trainingData: 'Millions of diverse images and captions',
    },
  },
  'audio-transcribe-2': {
    name: 'StellarTTS v2',
    description: 'An advanced audio transcription and analysis model that can accurately transcribe speech, identify speakers, and analyze sentiment in multiple languages.',
    capabilities: [
      'Multi-language speech recognition',
      'Speaker diarization',
      'Sentiment analysis',
      'Emotion detection',
      'Background noise filtering',
    ],
    technicalSpecs: {
      supportedLanguages: '100+',
      accuracy: '95% for clear audio',
      audioProcessing: 'Real-time capable',
    },
  },
  'AGent': {
    name: 'AGent',
    description: 'A highly advanced AI model capable of high-accuracy financial forecasting and adaptive learning in dynamic environments.',
    capabilities: [
      'Advanced Q* Algorithm implementation',
      'High-accuracy financial forecasting',
      'Adaptive learning in dynamic environments',
      'Real-time data processing and prediction',
      'Integration with Neura AGI architecture',
    ],
    technicalSpecs: {
      architecture: 'Neura AGI',
      accuracy: '98% for financial forecasting',
      dataProcessing: 'Real-time capable',
    },
  },
  'NGen-1': {
    name: 'NGen-1',
    description: 'A foundational language model capable of understanding and expanding core elements of a seed input.',
    capabilities: [
      'Autonomous generation from seed input',
      'Context-aware output production',
      'Creative writing and problem-solving',
      'Content generation from minimal prompts',
      'Understanding and expanding core elements of a seed'
    ],
    technicalSpecs: {
      parameters: '10 billion',
      trainingData: 'Large text corpus',
      contextWindow: '2,048 tokens',
    },
  },
  'NGen-3': {
    name: 'NGen-3',
    description: 'A cutting-edge multimodal AI model capable of processing and generating various data types.',
    capabilities: [
      'Multimodal data processing (text, images, audio)',
      'Advanced language processing and generation',
      'Real-time interactions and adaptive responses',
      'Complex data-driven problem-solving',
      'Continuous learning and improvement'
    ],
    technicalSpecs: {
      parameters: '500 billion',
      trainingData: 'Massive multimodal dataset',
      contextWindow: '16,384 tokens',
    },
  },
}

export function generateStaticParams() {
  return Object.keys(models).map((id) => ({
    id: id,
  }))
}

export default function ModelPage({ params }: { params: { id: string } }) {
  const model = models[params.id as keyof typeof models]

  if (!model) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{model.name}</h1>
      <p className="text-xl mb-8">{model.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Key Capabilities</h2>
      <ul className="list-disc list-inside mb-8">
        {model.capabilities.map((capability, index) => (
          <li key={index} className="mb-2">{capability}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {Object.entries(model.technicalSpecs).map(([key, value]) => (
          <div key={key} className="border-b border-gray-200 pb-2">
            <dt className="font-medium text-gray-500">{key}</dt>
            <dd className="mt-1">{value}</dd>
          </div>
        ))}
      </dl>

      <Button asChild>
        <a href="#" className="inline-block">Request Access</a>
      </Button>
    </div>
  )
}

