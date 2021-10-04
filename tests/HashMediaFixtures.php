<?php declare(strict_types=1);

namespace Eyecook\Blurhash\Test;

use Shopware\Core\Content\Media\MediaEntity;
use Shopware\Core\Content\Media\MediaType\ImageType;
use Shopware\Core\Content\Test\Media\MediaFixtures;
use Shopware\Core\Framework\Uuid\Uuid;

/**
 * @package Eyecook\Blurhash\Test
 * @author David Fecke (+leptoquark1)
 */
trait HashMediaFixtures
{
    use MediaFixtures;

    protected function getValidLocalMediaForHash(?string $fileExt = 'jpg', ?string $mimeType = 'image/jpeg', array $unset = []): MediaEntity
    {
        $media = new MediaEntity();

        if (in_array('id', $unset, true) === false) {
            $media->setId(Uuid::randomHex());
        }

        if (in_array('metaData', $unset, true) === false) {
            $media->setMetaData(['width' => 1, 'height' => 1, 'blurhash' => '1']);
        }

        if (in_array('fileName', $unset, true) === false) {
            $media->setFileName('validBlurhashMedia' . '.' . $fileExt);
        }

        if ($fileExt !== null) {
            $media->setFileExtension($fileExt);
        }

        if ($mimeType !== null) {
            $media->setMimeType($mimeType);
        }

        if (in_array('fileSize', $unset, true) === false) {
            $media->setFileSize(1024);
        }

        if (in_array('mediaType', $unset, true) === false) {
            $media->setMediaType(new ImageType());
        }

        $media->setPrivate(false);

        return $media;
    }

    protected function getValidExistingMediaForHash(): MediaEntity
    {
        /** @var MediaEntity $media */
        $media = $this->createFixture(
            'validExistingBlurhashMedia',
            [
                'validExistingBlurhashMedia' => [
                    'id' => Uuid::randomHex(),
                    'mimeType' => 'image/jpeg',
                    'fileExtension' => 'jpg',
                    'fileName' => 'validExistingBlurhashMedia',
                    'fileSize' => 1024,
                    'mediaType' => new ImageType(),
                    'private' => false,
                    'metaData' => ['width' => 1, 'height' => 1, 'blurhash' => '1'],
                    'uploadedAt' => new \DateTime('2021-08-14T11:17:06.012345Z'),
                ]
            ],
            self::getFixtureRepository('media')
        );

        return $media;
    }
}
