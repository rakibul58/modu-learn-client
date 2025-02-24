"use client"
import { Button } from "@heroui/button";

const NotFound = () => {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 text-center mt-16">
        <h1 className="mb-4 text-9xl font-bold text-danger-500">404</h1>

        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="h-1 w-24 bg-primary-500" />
          </div>
        </div>

        <h2 className="mb-4 text-3xl font-semibold text-secondary-900">
          Page Not Found
        </h2>

        <p className="mb-8 text-lg text-primary-900">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => window.history.back()}
            variant="bordered"
            className="flex items-center gap-2"
          >
            Go Back
          </Button>

          <Button
            onClick={() => (window.location.href = "/")}
            variant="solid"
          >
            Return Home
          </Button>
        </div>
      </div>

      <div className="mt-16 text-center text-sm text-gray-500">
        <p>
          Need help?{" "}
          <a href="/contact" className="text-primary-600 hover:underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
