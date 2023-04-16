# Generated by Django 4.1.7 on 2023-04-15 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stat11', '0003_alter_user_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='batterscoreboard',
            name='balls',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='batterscoreboard',
            name='fours',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='batterscoreboard',
            name='runs',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='batterscoreboard',
            name='sixes',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='bowlerscoreboard',
            name='balls',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='bowlerscoreboard',
            name='maidens',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='bowlerscoreboard',
            name='runs',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='bowlerscoreboard',
            name='wickets',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.ImageField(blank=True, default=None, max_length=255, null=True, upload_to=''),
        ),
    ]
