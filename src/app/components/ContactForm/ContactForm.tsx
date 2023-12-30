import {Button, Card, Form, Input, message, Select, Space} from "antd";
import React, {useState} from "react";
import {sendContact} from "@/app/services/contact";
import {ListingType} from "@/app/types/listingType";
import {IContactForm} from "@/app/types/contact";

interface ContactFormProps {
    listingType: ListingType;
    propertyId: number;
}

export const ContactForm = ({propertyId, listingType}: ContactFormProps) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState<boolean>(false);
    const [form] = Form.useForm();

    const onFinish = async (values: IContactForm) => {
        try {
            setLoading(true);
            const payload: IContactForm = {
                ...values,
                property: propertyId,
                listingType
            };
            await sendContact(payload);
            messageApi.open({
                type: "success",
                content: "Thank you for your interest. We will contact you shortly.",
            });
            form.resetFields();
        } catch (e) {
            messageApi.open({
                type: "error",
                content: "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card title={"Interested in the property? Contact us now!"} className={"shadow-lg"}>
            {contextHolder}
            <Form
                layout="vertical"
                form={form}
                name="control-hooks"
                onFinish={onFinish}
            >
                <Form.Item name="name" label="Name" rules={[{required: true}]}>
                    <Input size={"large"}/>
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{required: true, type: "email"}]}>
                    <Input size={"large"}/>
                </Form.Item>
                <Form.Item name="phoneNo" label="Phone Number" rules={[{required: true}]}>
                    <Input size={"large"}/>
                </Form.Item>
                <Form.Item name="lineId" label="Line ID">
                    <Input size={"large"}/>
                </Form.Item>
                <Form.Item>
                    <Button loading={loading} size={"large"} type="primary" htmlType="submit"
                            className={"w-full"}>Submit</Button>
                </Form.Item>
            </Form>
        </Card>

    );
};
