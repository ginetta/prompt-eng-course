import { Button } from '@/components/ui/button';
import { ExternalLink } from '@/components/external-link';
import { IconArrowRight } from '@/components/ui/icons';

const exampleMessages = [
  {
    heading: 'What are the trending stocks?',
    message: 'What are the trending stocks?',
  },
  {
    heading: "What's the stock price of AAPL?",
    message: "What's the stock price of AAPL?",
  },
  {
    heading: "I'd like to buy 10 shares of MSFT",
    message: "I'd like to buy 10 shares of MSFT",
  },
];

export function EmptyScreen({
  submitMessage,
}: {
  submitMessage: (message: string) => void;
}) {
  return (
    <div className="mx-4 h-full px-4">
      <div className="mb-4 rounded-lg border bg-background p-8">
        <h2 className="mb-2 text-lg font-semibold">
          How can I help you today?
        </h2>
      </div>
    </div>
  );
}
