import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image 
                src="/appImg/apple-touch-icon.png" 
                alt="Receipt Tracker Icon" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <h1 className="text-2xl font-bold text-gray-900">Receipt Tracker</h1>
            </Link>
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: November 1, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium text-green-800 mb-2">🔒 Privacy-First Approach</h3>
              <p className="text-green-700 font-medium">
                Receipt Tracker is designed with privacy at its core. We DO NOT collect, store, or have access to your personal information or receipt data.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Receipt Tracker. We respect your privacy and have built our app to operate without collecting 
              any personal data from you. This privacy policy explains our privacy-first approach and how your data 
              is handled when you use our mobile application.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All your receipt data stays on your device or is processed directly by third-party AI services without passing through our servers.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Do NOT Collect</h2>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium text-red-800 mb-2">🚫 Zero Data Collection</h3>
              <p className="text-red-700 font-medium">
                Receipt Tracker does not collect, store, or have access to any of your personal information or receipt data.
              </p>
            </div>

            <h3 className="text-xl font-medium text-gray-800 mb-3">We DO NOT Collect:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>❌ Personal information (names, emails, phone numbers)</li>
              <li>❌ Receipt images or photos</li>
              <li>❌ Transaction details or financial information</li>
              <li>❌ User accounts or login credentials</li>
              <li>❌ Location data</li>
              <li>❌ Usage analytics or tracking data</li>
              <li>❌ Device information beyond what&apos;s necessary for app functionality</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">How Your Data is Processed</h3>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-3">Direct AI Processing</h4>
              <p className="text-blue-700 mb-4">
                When you scan a receipt, the image is sent directly from your device to Microsoft&apos;s OpenAI service for text extraction and processing. 
                We do not have access to or store these images.
              </p>
              
              <h4 className="font-medium text-blue-800 mb-3">Local Storage Only</h4>
              <p className="text-blue-700 mb-4">
                All your processed receipt data, categories, and preferences are stored locally on your device. 
                This data never leaves your device unless you choose to backup or export it.
              </p>
              
              <h4 className="font-medium text-blue-800 mb-3">Purchase Management</h4>
              <p className="text-blue-700">
                App purchases and subscriptions are handled entirely by RevenueCat and Apple/Google Play Store. 
                We do not collect or store any payment information.
              </p>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Your Data is Processed</h2>
            <div className="bg-green-50 p-6 rounded-lg mb-4">
              <p className="text-green-800 font-medium mb-2">Since we don&apos;t collect your data, here&apos;s how the app works:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">📱 On Your Device</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• All receipt data stored locally</li>
                  <li>• Categories and preferences saved on device</li>
                  <li>• No cloud storage or syncing</li>
                  <li>• Complete offline functionality</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">🤖 AI Processing</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Images sent directly to Microsoft OpenAI</li>
                  <li>• Text extraction processed in real-time</li>
                  <li>• No storage of images by our service</li>
                  <li>• Processed data returned to your device only</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Storage and Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-medium text-green-800 mb-2">🔒 Maximum Privacy Protection</h3>
              <p className="text-green-700">
                Since we don&apos;t collect or store any data, your privacy is automatically protected. Your data never leaves your device except for direct AI processing.
              </p>
            </div>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Local Security</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>All data stored locally on your device using iOS/Android security</li>
              <li>Receipt data protected by your device&apos;s built-in encryption</li>
              <li>No cloud storage means no data breach risk from our servers</li>
              <li>App uses device-level security features (Face ID, Touch ID, passcode)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Third-Party Processing Security</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-800">
                <strong>Microsoft OpenAI:</strong> Receipt images are processed according to Microsoft&apos;s privacy and security standards. 
                Images are not stored by Microsoft after processing is complete.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-purple-800">
                <strong>RevenueCat:</strong> Purchase information is handled according to RevenueCat&apos;s privacy policy. 
                We do not have access to your payment details.
              </p>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-medium text-green-800 mb-2">✅ We Cannot Share What We Don&apos;t Have</h3>
              <p className="text-green-700">
                Since we don&apos;t collect or store your data, we cannot share, sell, or disclose your personal information to anyone.
              </p>
            </div>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Limited Third-Party Interactions:</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium text-gray-800">Microsoft OpenAI</p>
                <p className="text-gray-600 text-sm">Receipt images are sent directly from your device to Microsoft for AI processing. We are not involved in this data transfer.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-medium text-gray-800">RevenueCat & App Stores</p>
                <p className="text-gray-600 text-sm">Purchase information is handled directly between you, RevenueCat, and Apple/Google. We do not receive payment data.</p>
              </div>
              
              <div className="border-l-4 border-gray-400 pl-4">
                <p className="font-medium text-gray-800">Legal Compliance</p>
                <p className="text-gray-600 text-sm">Since we don&apos;t collect data, we have nothing to provide to legal requests regarding user information.</p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium text-green-800 mb-2">🎯 Complete Control</h3>
              <p className="text-green-700">
                Since all your data stays on your device, you have complete control over your information at all times.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800 mb-3">✅ Data Access</h3>
                <p className="text-blue-700 text-sm">
                  All your data is already accessible to you on your device. No need to request it from us.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-purple-800 mb-3">✅ Data Control</h3>
                <p className="text-purple-700 text-sm">
                  Edit, update, or modify your receipt data directly in the app at any time.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-red-800 mb-3">✅ Data Deletion</h3>
                <p className="text-red-700 text-sm">
                  Simply delete the app to remove all data. No server-side data to worry about.
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-teal-800 mb-3">✅ Data Export</h3>
                <p className="text-teal-700 text-sm">
                  Use the app&apos;s built-in export features to share your data in various formats.
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Receipt Tracker may contain links to third-party websites or integrate with third-party services. 
              We are not responsible for the privacy practices of these external services. We encourage you to 
              review their privacy policies before providing any personal information.
            </p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Analytics Services</h3>
            <p className="text-gray-700 mb-4">
              We use analytics services to understand how users interact with our app. These services may collect 
              anonymous usage data to help us improve the user experience. You can opt out of analytics tracking 
              in the app settings.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&rsquo;s Privacy</h2>
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <p className="text-orange-800">
                Receipt Tracker is not intended for use by children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If you are a parent or guardian and believe 
                your child has provided us with personal information, please contact us immediately.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-medium text-blue-800 mb-2">📱 Device-Only Storage</h3>
              <p className="text-blue-700">
                Since we don&apos;t collect or store your data, there&apos;s no server-side retention policy. Your data lives only on your device.
              </p>
            </div>

            <h3 className="text-xl font-medium text-gray-800 mb-3">How Data Retention Works:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Local Storage:</strong> Data stays on your device until you delete it or uninstall the app</li>
              <li><strong>App Deletion:</strong> Uninstalling the app removes all local data immediately</li>
              <li><strong>AI Processing:</strong> Microsoft OpenAI processes images in real-time without long-term storage</li>
              <li><strong>Purchase Records:</strong> Handled by RevenueCat and app stores according to their policies</li>
              <li><strong>No Backups:</strong> We don&apos;t maintain any backups of your data</li>
            </ul>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update our privacy policy from time to time. We will notify you of any changes by posting 
              the new privacy policy on this page and updating the &ldquo;Last updated&rdquo; date. For significant changes, 
              we will also send you an email notification.
            </p>
            <p className="text-gray-700">
              You are advised to review this privacy policy periodically for any changes. Changes to this privacy 
              policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <p className="text-blue-800 mb-4">
                If you have any questions about this privacy policy or our privacy-first approach, please contact us:
              </p>
              <div className="space-y-2 text-blue-700">
                <p><strong>Email:</strong> privacy@receipttracker.app</p>
                <p><strong>Support:</strong> support@receipttracker.app</p>
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Since we don&apos;t collect your data, most privacy requests (like data access or deletion) 
                  can be handled directly by you through your device settings or by uninstalling the app.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Links */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/support" className="hover:text-blue-600 transition-colors">Support</Link>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              © 2024 Receipt Tracker. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}