import React from "react";
import Heading from "./Heading";
import { Card, CardContent } from "./ui/card";
import { MailIcon, PhoneIcon } from "lucide-react";
import { BiLocationPlus } from "react-icons/bi";

const ContactCard = () => {
  return (
    <section className="py-12 md:py-24 bg-black">
      <div className="container mx-auto flex justify-between items-center mb-8 px-4 sm:px-6">
        <Heading title="Contact Us" subtitle="Get in touch with us" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
        <Card>
          <CardContent>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-white mb-4">Call us at</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <PhoneIcon className="w-4 h-4" />
              <span>(123) 456-7890</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-white mb-4">Send us an email at</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MailIcon className="w-4 h-4" />
              <span>info@gracechurch.com</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-xl font-bold mb-2">Adress</h3>
            <p className="text-white mb-4">Come see us at</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BiLocationPlus className="w-4 h-4" />
              <span>123 Main St, Anytown USA</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactCard;
