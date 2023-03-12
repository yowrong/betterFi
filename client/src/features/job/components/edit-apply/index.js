import { useEffect, useState } from 'react';
import { Button, Container } from '@mantine/core';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import { Color } from '@tiptap/extension-color';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import jsdPDF from 'jspdf';


import { sampleData } from './sample';
import { useStyles } from './styles';

const EditApply = () => {
    const { classes } = useStyles();
    const toHTML = (value) => {
        return value
            .trim()
            .split('\n')
            .filter(item => item.match(/\s/g) && item.trim() !== ',')
            .map((item) => `<p>${item}</p>`)
            .filter((item) => item !== '<p></p>' && item !== '<p>,</p>')
            .join();
    }
    const doc = new jsdPDF({
        unit: 'pt',
    })

    const [data, setData] = useState(sampleData);

    useEffect(() => {
        // TODO: Query from Server
        setData(toHTML(data));
    }, []);
    
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Color
        ],
        content: toHTML(sampleData),
    });

    const onBtnClicked = () => {
        const source = '<div style="width: 560px; margin: 0 20px; font-size: 12px">' 
            + editor.getHTML().replace(' ', '&nbsp;')
            + '</div>'
        doc.setFontSize(10)
        doc.html(source, {
            async callback(doc) {
                await doc.save('cover_letter');
            },
            width: 560,
        })
    }

    return (
        <>
        <RichTextEditor editor={editor} className={classes.root}>
                <RichTextEditor.Toolbar sticky stickyOffset={60}>
                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Underline />
                    <RichTextEditor.Strikethrough />
                    <RichTextEditor.ClearFormatting />
                    <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.H1 />
                    <RichTextEditor.H2 />
                    <RichTextEditor.H3 />
                    <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Blockquote />
                    <RichTextEditor.Hr />
                    <RichTextEditor.BulletList />
                    <RichTextEditor.OrderedList />
                    <RichTextEditor.Subscript />
                    <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Link />
                    <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ColorPicker
                    colors={[
                    '#25262b',
                    '#868e96',
                    '#fa5252',
                    '#e64980',
                    '#be4bdb',
                    '#7950f2',
                    '#4c6ef5',
                    '#228be6',
                    '#15aabf',
                    '#12b886',
                    '#40c057',
                    '#82c91e',
                    '#fab005',
                    '#fd7e14',
                    ]}
                />

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.AlignLeft />
                    <RichTextEditor.AlignCenter />
                    <RichTextEditor.AlignJustify />
                    <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>

                <RichTextEditor.Content />
            </RichTextEditor>
            <br/>
            <span>All good? Now all that's left is to</span>
            <Button 
                variant='outline'
                compact
                onClick={onBtnClicked}
                className={classes.btn}
            >
                Download as PDF
            </Button>
            <span>, submit your application, and you're another step closer!</span>
        </>
    
    );
}

export default EditApply;